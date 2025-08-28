export const presusContent = {
  es: {
    generalDescription: `
### Presus - Dashboard Financiero

Aplicación financiera que **automatiza el seguimiento de presupuestos** eliminando trabajo manual. **MVP funcional en beta** resolviendo problemas reales para usuarios argentinos.

#### Problemas Que Resuelve y Soluciones Creadas

**💸 Problema: Carga Manual Tediosa**  
Cada compra requiere abrir la app financiera, recordar el monto exacto, categorizar manualmente y escribir toda la información. Este proceso es tan molesto que la mayoría abandona el seguimiento después de una semana.

**✅ Solución: Parsing Inteligente de Emails**  
Presus se conecta con Gmail y detecta automáticamente emails de compras de Santander, Naranja X y Mercado Libre. Extrae monto, fecha, comercio y categoría, agregando transacciones sin intervención manual.

**📊 Problema: Información Dispersa**  
Tus gastos están repartidos entre: home banking del banco, app de tarjeta de crédito, Mercado Libre, transferencias y efectivo. No hay vista consolidada de cuánto gastas realmente por mes.

**✅ Solución: Dashboard Unificado**  
Todas las transacciones se centralizan en un dashboard único. Ves tu gasto mensual total, por categoría y por medio de pago en tiempo real, sin necesidad de abrir múltiples apps.

**🎯 Problema: Presupuestos Que No Funcionan**  
Creas presupuestos mentales como "gastar $50,000 en comida este mes" pero no hay feedback continuo. Solo te das cuenta que te excediste cuando llega el resumen de la tarjeta.

**✅ Solución: Seguimiento Visual en Tiempo Real**  
Cada categoría de presupuesto muestra progreso visual: cuánto gastaste, cuánto queda y tu ritmo de gasto. Alertas automáticas cuando te acercas al límite.
`,
    impactDescription: `
**Logros Clave**:  
✅ **MVP Funcional** desplegado y en uso por usuarios beta  
✅ **Sistema de parsing propietario** para bancos argentinos  
✅ **Problem-solution fit validado** con uso personal diario  
✅ **Desarrollo acelerado** usando Claude Code como copiloto

Demostrando capacidad de **identificar problema real → diseñar solución técnica → ejecutar hasta producción**.
`,
    tabLabels: {
      dashboard: "Dashboard",
      budgets: "Presupuestos", 
      transactions: "Transacciones",
      paymentMethods: "Medios de Pago"
    },
    buttons: {
      viewApp: "Ver Aplicación (Beta)",
      betaNote: "🔒 Actualmente en fase beta para usuarios limitados"
    }
  },
  en: {
    generalDescription: `
### Presus - Finance Dashboard

Financial application that **automates budget tracking** eliminating manual work. **Functional MVP in beta** solving real problems for Argentinian users.

#### Problems It Solves and Created Solutions

**💸 Problem: Tedious Manual Entry**  
Each purchase requires opening the financial app, remembering the exact amount, manually categorizing, and typing all the information. This process is so annoying that most people abandon tracking after one week.

**✅ Solution: Intelligent Email Parsing**  
Presus connects with your Gmail and automatically detects purchase emails from Santander, Naranja X, and Mercado Libre. It extracts amount, date, merchant, and category, adding transactions without manual intervention.

**📊 Problem: Scattered Information**  
Your expenses are spread across: bank's home banking, credit card app, Mercado Libre, transfers, and cash. There's no consolidated view of how much you actually spend per month.

**✅ Solution: Unified Dashboard**  
All transactions are centralized in a single dashboard. You see your total monthly spending, by category, and by payment method in real-time, without needing to open multiple apps.

**🎯 Problem: Budgets That Don't Work**  
You create mental budgets like "spend $50,000 on food this month" but there's no continuous feedback. You only realize you've exceeded when the credit card statement arrives.

**✅ Solution: Real-Time Visual Tracking**  
Each budget category shows visual progress: how much you've spent, how much is left, and your spending pace. Automatic alerts when you approach the limit.
`,
    impactDescription: `
**Key Achievements**:  
✅ **Functional MVP** deployed and in use by beta users  
✅ **Proprietary parsing system** for Argentinian banks  
✅ **Problem-solution fit validated** with daily personal use  
✅ **Accelerated development** using Claude Code as copilot

Demonstrating ability to **identify real problem → design technical solution → execute to production**.
`,
    tabLabels: {
      dashboard: "Dashboard",
      budgets: "Budgets",
      transactions: "Transactions", 
      paymentMethods: "Payment Methods"
    },
    buttons: {
      viewApp: "View Application (Beta)",
      betaNote: "🔒 Currently in beta phase for limited users"
    }
  }
};