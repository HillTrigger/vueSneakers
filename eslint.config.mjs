// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		// 🚨 Общие ошибки
		'no-console': 'warn', // Разрешить console.log, но с предупреждением
		'no-debugger': 'error', // Запрет debugger в продакшене
		eqeqeq: ['error', 'always'], // Строгое сравнение ===
		curly: ['error', 'all'], // Всегда фигурные скобки в if, while, for
		semi: ['error', 'always'], // Всегда точка с запятой
		quotes: ['error', 'single'], // Одинарные кавычки

		// 🛠️ Для Vue и Nuxt
		'vue/multi-word-component-names': 'off', // Можно писать односоставные имена компонентов
		'vue/no-v-html': 'warn', // v-html — предупреждение (из-за XSS)
		'vue/html-indent': ['error', 2], // Отступ в шаблонах — 2 пробела
		'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }], // Лимит атрибутов на строку

		// 📂 Импорты
		'import/no-unresolved': 'error', // Ошибка при несуществующих модулях
		'import/order': ['error', { 'newlines-between': 'always' }], // Порядок импортов

		// 🔧 Прочее
		'no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true },
		], // Нельзя оставлять неиспользуемые переменные
		'no-var': 'error', // Нельзя использовать var — только let/const
		'prefer-const': 'error', // Если переменная не меняется — только const
	},
});
