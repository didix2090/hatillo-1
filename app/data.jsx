/* Sample data for the Hatillo assistant prototype. Currency: B/. (Balboa, USD-pegged). */
window.HatilloData = {
  fmt: (n) => '$' + n.toFixed(2),

  saldos: [
    { id: 'placa', concepto: 'Impuesto de circulación', monto: 45.0, ref: 'Placa 123456', vence: '30 jun 2026', estado: 'pending' },
    { id: 'ibi', concepto: 'IBI · Bien inmueble', monto: 128.5, ref: 'Finca 45789', vence: '15 jul 2026', estado: 'pending' },
  ],

  chips: [
    { label: 'Pagar mi placa', intent: 'pago' },
    { label: 'Arrendamiento de cementerio', intent: 'funeraria' },
    { label: 'Sacar Paz y Salvo', intent: 'pazysalvo' },
    { label: 'Reportar en mi calle', intent: 'reporte' },
    { label: 'Trámites', intent: 'tramite' },
    { label: 'Preguntas frecuentes', intent: 'faq' },
  ],

  /* Funerarias — arrendamientos de cementerio (mantenimiento anual). */
  arrendamiento: {
    concepto: 'Mantenimiento de arrendamiento',
    monto: 10.0,
    periodo: '2026',
    ref: 'Contrato #AC-3391',
    estado: 'pending', // 'pending' Pendiente · 'paid' Al día · 'overdue' Vencido
    espacio: 'Cripta · Pabellón B · Fila 3 · Nicho 12',
    difunto: { nombre: 'Rosa E. Batista de Him', inhumacion: 'Inhumación · 14 mar 2019', resolucion: 'Resolución #INH-2019-0421' },
    contrato: { vigencia: 'Vigencia 2019 – 2039', titular: 'Titular · a tu nombre' },
    proximo: '2027',
  },
  arrendamientoFamiliar: {
    concepto: 'Mantenimiento de arrendamiento',
    monto: 10.0,
    periodo: '2026',
    ref: 'Contrato #AC-2870',
    estado: 'overdue',
    espacio: 'Bóveda · Pabellón D · Fila 1 · Nicho 4',
    difunto: { nombre: 'Marcelina Him de Batista', inhumacion: 'Inhumación · 02 nov 2015', resolucion: 'Resolución #INH-2015-1188' },
    contrato: { vigencia: 'Vigencia 2015 – 2035', titular: 'Titular · Rosa E. Batista de Him' },
    proximo: '2027',
  },

  actividades: ['Comercio al por menor', 'Servicios profesionales', 'Restaurante / fonda', 'Taller o manufactura'],

  tramiteTipos: ['Aviso de Operación', 'Permiso de construcción', 'Registro de negocio'],

  faqs: [
    { q: '¿Cómo saco el Aviso de Operación?', a: 'Lo puedes iniciar aquí mismo: necesitas cédula, tipo de actividad y dirección del local. Te guío paso a paso.' },
    { q: '¿Cuándo vence el pago de mi placa?', a: 'El impuesto de circulación vence según el último dígito de tu placa. Dime tu número y te digo la fecha exacta.' },
    { q: '¿Qué es el Paz y Salvo municipal?', a: 'Es la constancia de que no debes al Municipio. Te lo genero al instante si estás al día.' },
    { q: '¿Puedo pagar con Yappy?', a: 'Sí. En cualquier pago puedes elegir tarjeta o Yappy — la billetera móvil más usada en Panamá.' },
  ],

  historial: [
    { grupo: 'Hoy', items: [
      { id: 'c1', titulo: 'Pago placa 123456', prev: 'Comprobante TXN-8830012 · $45.00', estado: 'paid', time: '9:41' },
      { id: 'c2', titulo: 'Reporte — hueco Calle 50', prev: 'En proceso · Cuadrilla asignada', estado: 'processing', time: '8:10' },
    ] },
    { grupo: 'Esta semana', items: [
      { id: 'c3', titulo: 'Aviso de Operación', prev: 'Solicitud #AO-20984 · En proceso', estado: 'processing', time: 'Lun' },
      { id: 'c4', titulo: 'Paz y Salvo municipal', prev: 'Constancia #PS-7781 · Emitido', estado: 'done', time: 'Dom' },
    ] },
  ],

  metodos: [
    { id: 'card', tipo: 'Tarjeta', detalle: 'Visa •••• 4821' },
    { id: 'yappy', tipo: 'Yappy', detalle: '+507 6123 4567' },
  ],

  /* Conversaciones recientes (para el drawer). */
  recientes: [
    { id: 'r1', titulo: 'Pago de placa 123456', intent: 'pago', time: 'Hoy' },
    { id: 'r2', titulo: 'Hueco en Calle 50', intent: 'reporte', time: 'Hoy' },
    { id: 'r3', titulo: 'Aviso de Operación', intent: 'tramite', time: 'Lun' },
    { id: 'r4', titulo: 'Paz y Salvo municipal', intent: 'pazysalvo', time: 'Dom' },
    { id: 'r5', titulo: 'Arrendamiento de cementerio', intent: 'funeraria', time: '3 jul' },
  ],

  /* Notificaciones (se abren desde la campana). */
  notificaciones: {
    saldo: { id: 'n-saldo', monto: 45.0, titulo: 'Tienes un saldo pendiente', detalle: '$45.00 del impuesto de circulación · placa 123456. Vence el 30 de junio.', unread: true },
    actividad: [
      { id: 'n-a1', icon: 'reportes', tint: 'b', titulo: 'Tu reporte está en proceso', detalle: 'Hueco en Calle 50 · Reporte #R-4471. Cuadrilla asignada.', time: 'Hace 2 h', unread: true },
      { id: 'n-a2', icon: 'tramites', tint: 'b', titulo: 'Aviso de Operación en proceso', detalle: 'Solicitud #AO-20984 · La estamos revisando.', time: 'Ayer', unread: false },
      { id: 'n-a3', icon: 'pagos', tint: 'm', titulo: 'Pago confirmado', detalle: 'IBI · Finca 45789 · $128.50 · Comprobante TXN-8830012.', time: 'Lun', unread: false },
    ],
    municipio: [
      { id: 'n-m1', icon: 'alertas', tint: 'b', titulo: 'Feria del Contribuyente', detalle: 'Descuentos por pronto pago del 12 al 16 de agosto en todas las sedes.', time: 'Mar', unread: false },
      { id: 'n-m2', icon: 'ubicacion', tint: 'm', titulo: 'Cierre vial programado', detalle: 'Vía España cerrará este domingo por mantenimiento municipal.', time: '2 jul', unread: false },
    ],
  },
};
