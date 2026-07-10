/**
 * useEmailDomainSuggestions
 * -------------------------------------------------------------------------
 * Lógica reutilizable para un input de email con dropdown de sugerencia de
 * dominio dinámico. NO renderiza UI: expone estado + manejadores para que los
 * conectes a tus propios inputs y contenedores visuales.
 *
 * Uso mínimo (React):
 *
 *   const email = useEmailDomainSuggestions();
 *   <input
 *     value={email.value}
 *     onChange={email.onChange}
 *     onFocus={email.onFocus}
 *     onBlur={email.onBlur}
 *     onKeyDown={email.onKeyDown}
 *   />
 *   {email.isOpen && (
 *     <ul>
 *       {email.suggestions.map((s, i) => (
 *         <li
 *           key={s}
 *           aria-selected={i === email.activeIndex}
 *           onMouseDown={(e) => e.preventDefault()}  // evita que el blur cierre antes del click
 *           onClick={() => email.onSelect(s)}
 *         >
 *           {s}
 *         </li>
 *       ))}
 *     </ul>
 *   )}
 * -------------------------------------------------------------------------
 */

// Dominios a sugerir (según especificación).
const DEFAULT_DOMAINS = [
  '@gmail.com',
  '@yahoo.com',
  '@icloud.com',
  '@hotmail.com',
  '@outlook.com',
];

/**
 * Construye la lista de sugerencias a partir del texto actual del input.
 * Función pura: no toca estado, fácil de testear por separado.
 *
 * Reglas:
 *  - Input vacío  -> sin sugerencias.
 *  - Sin "@"      -> se ofrece "local + cada dominio".
 *  - Con "@x"     -> se filtran los dominios que empiezan por lo escrito
 *                    después del "@" y se recomponen como "local + dominio".
 *  - Si el usuario ya escribió un dominio completo y exacto -> sin sugerencias
 *    (no tiene sentido sugerir lo que ya está escrito).
 *
 * @param {string} raw            texto actual del input
 * @param {string[]} domains      lista de dominios (con "@")
 * @returns {string[]}            correos completos sugeridos
 */
function buildSuggestions(raw, domains = DEFAULT_DOMAINS) {
  const value = raw.trim();
  if (!value) return [];

  const atIndex = value.indexOf('@');

  // 1) Sin "@": sugerimos local + todos los dominios.
  if (atIndex === -1) {
    return domains.map((d) => value + d);
  }

  // 2) Con "@": separamos parte local y lo escrito tras el "@".
  const local = value.slice(0, atIndex);
  const typedDomain = value.slice(atIndex).toLowerCase(); // incluye el "@"

  // Sin parte local (p.ej. solo "@") no sugerimos nada útil.
  if (!local) return [];

  // Filtramos dominios que empiezan por lo tecleado.
  const matches = domains.filter((d) => d.toLowerCase().startsWith(typedDomain));

  // 3) Si ya escribió exactamente un dominio de la lista, no sugerimos.
  if (matches.length === 1 && matches[0].toLowerCase() === typedDomain) {
    return [];
  }

  // Recomponemos "local + dominio". (Si no hay coincidencias -> array vacío,
  // lo que hará que el dropdown se cierre solo.)
  return matches.map((d) => local + d);
}

/**
 * Hook principal.
 * @param {object}   [opts]
 * @param {string}   [opts.initialValue='']   valor inicial del input
 * @param {string[]} [opts.domains]           dominios personalizados
 * @param {(email:string)=>void} [opts.onChange]  callback externo opcional
 */
function useEmailDomainSuggestions(opts = {}) {
  const {
    initialValue = '',
    domains = DEFAULT_DOMAINS,
    onChange: onChangeExternal,
  } = opts;

  const [value, setValue] = React.useState(initialValue);
  const [isFocused, setIsFocused] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1); // navegación con teclado
  // Se cierra manualmente (Escape / selección) hasta el próximo cambio de texto.
  const [dismissed, setDismissed] = React.useState(false);

  // Recalcula sugerencias solo cuando cambia el texto o los dominios.
  const suggestions = React.useMemo(
    () => buildSuggestions(value, domains),
    [value, domains],
  );

  // 3) Visibilidad: abierto solo si hay foco, texto no vacío, hay sugerencias
  //    y el usuario no lo cerró manualmente.
  const isOpen = isFocused && !dismissed && suggestions.length > 0;

  // Helper interno para fijar valor + avisar hacia afuera.
  const commit = React.useCallback(
    (next) => {
      setValue(next);
      if (onChangeExternal) onChangeExternal(next);
    },
    [onChangeExternal],
  );

  // 1) Captura en tiempo real. Cada tecleo reabre el dropdown y resetea la
  //    selección activa. (5) El filtrado por "@" lo resuelve buildSuggestions.
  const onChange = React.useCallback(
    (e) => {
      commit(e.target.value);
      setDismissed(false);
      setActiveIndex(-1);
    },
    [commit],
  );

  // 4) Selección: completa el input y cierra el dropdown.
  const onSelect = React.useCallback(
    (email) => {
      commit(email);
      setDismissed(true);      // se cierra hasta el siguiente cambio
      setActiveIndex(-1);
    },
    [commit],
  );

  const onFocus = React.useCallback(() => {
    setIsFocused(true);
    setDismissed(false);
  }, []);

  // Cierre al perder el foco. En la UI usa onMouseDown+preventDefault en las
  // opciones para que el click se registre antes que este blur.
  const onBlur = React.useCallback(() => {
    setIsFocused(false);
    setActiveIndex(-1);
  }, []);

  // Navegación por teclado opcional (↑ ↓ Enter Esc).
  const onKeyDown = React.useCallback(
    (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((i) => (i + 1) % suggestions.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
          break;
        case 'Enter':
          if (activeIndex >= 0) {
            e.preventDefault();
            onSelect(suggestions[activeIndex]);
          }
          break;
        case 'Escape':
          setDismissed(true);
          setActiveIndex(-1);
          break;
        default:
          break;
      }
    },
    [isOpen, suggestions, activeIndex, onSelect],
  );

  return {
    // estado
    value,
    suggestions,
    isOpen,
    activeIndex,
    // manejadores para el <input>
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    // manejador para cada opción del dropdown
    onSelect,
    // utilidades por si las necesitas
    setValue: commit,
    close: () => setDismissed(true),
  };
}

// Exponer a scope global (patrón del proyecto) y como módulo si aplica.
if (typeof window !== 'undefined') {
  window.useEmailDomainSuggestions = useEmailDomainSuggestions;
  window.buildEmailSuggestions = buildSuggestions;
}
