import { createContext, useContext, useState, useMemo, useEffect } from "react";

const ThemeContext = createContext(null);

// 🧩 Hook de conveniencia
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}

// 🌗 Proveedor del tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // 🧠 Lee del localStorage o usa el tema del sistema
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // 🔁 Actualiza localStorage cuando cambia el tema
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // 💡 Evita re-render innecesario en consumidores
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "light" ? "theme-light" : "theme-dark"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
