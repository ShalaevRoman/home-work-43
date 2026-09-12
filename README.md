# React Context Demo

Домашнє завдання: використання React Context у багаторівневій архітектурі компонентів.

Проєкт демонструє, як передати глобальні дані (список користувачів і тему оформлення) через кілька рівнів вкладеності компонентів (`Dashboard` → `UserList` → `UserProfile` → `UserProfileDetails`) без прокидання пропсів на кожному рівні.

## Стек

- Vite
- React 19
- TypeScript

## Встановлення та запуск

```bash
npm install
npm run dev
```

Проєкт буде доступний за адресою, яку виведе Vite (типово `http://localhost:5173`).

Збірка production-версії:

```bash
npm run build
```

## Що продемонстровано

- `createContext` з осмисленим значенням за замовчуванням (`src/context/AppContext.tsx`)
- `Provider`, що зберігає стан теми та список користувачів
- `useContext` (через власний хук `useAppContext`) на трьох рівнях вкладеності компонентів
- `React.memo` для компонентів, що споживають контекст

## Посилання на проект

- Демо: https://home-work-43-three.vercel.app
- GitHub: https://github.com/ShalaevRoman/home-work-43
