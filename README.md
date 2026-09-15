# React Redux Demo

Домашнє завдання: міграція стану застосунку з React Context на Redux Toolkit.

Проєкт демонструє, як зберігати глобальні дані (список користувачів і тему оформлення) у Redux-сторі та споживати їх через кілька рівнів вкладеності компонентів (`Dashboard` → `UserList` → `UserProfile` → `UserProfileDetails`) без прокидання пропсів і без React Context.

## Стек

- Vite
- React 19
- TypeScript
- Redux Toolkit + React Redux

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

- `configureStore` з двома слайсами — `usersSlice` і `themeSlice` (`src/redux/store.ts`)
- `themeSlice` — синхронний reducer `toggleTheme` (`src/redux/slices/themeSlice.ts`)
- `usersSlice` — асинхронне завантаження через `createAsyncThunk` та `extraReducers` (`pending`/`fulfilled`/`rejected`), з імітацією запиту до сервера (`src/api/usersApi.ts`)
- `<Provider store={store}>`, підключений у `main.tsx`
- Типізовані хуки `useAppDispatch`/`useAppSelector` (`src/redux/hooks.ts`)
- `useSelector`/`useDispatch` на трьох рівнях вкладеності компонентів замість `useContext`
- `React.memo` для компонентів, що читають дані зі стору

## Посилання на проект

- Демо: https://home-work-43-three.vercel.app
- GitHub: https://github.com/ShalaevRoman/home-work-43
