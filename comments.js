/* ============================================================
   SML GAME — comments.js v2.0
   Главный файл: оглавление, fillTemplate, регистрация вариантов
   ============================================================ */

const VARIANTS = {};

function fillTemplate(tpl, ctx) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => (ctx[k] != null ? ctx[k] : ""));
}

function registerVariant(id, options) {
  VARIANTS[id] = options;
}

function pickVariantForAttack(tactic, roles) {
  const keys = Object.keys(VARIANTS);
  if (!keys.length) return null;
  return VARIANTS[keys[Math.floor(Math.random() * keys.length)]];
}
