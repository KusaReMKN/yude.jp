import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export type Theme = "light" | "dark";

const themeState = atom<Theme>({
    key: "themeState",
    default: "light",
});

export const useSetTheme = () => useSetRecoilState(themeState);

export const useTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
        const root = window.document.documentElement;
        root.setAttribute("data-theme", newTheme);
        root.setAttribute("data-bs-theme", newTheme);
    };

    return { theme, toggleTheme };
};

type Props = {
    children: JSX.Element;
};

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            className="btn btn-secondary drop-shadow-md mr-3"
            onClick={toggleTheme}
            aria-label="テーマの切り替え"
        >
            {theme === "light" ? (
                "🌙"
            ) : (
                "🌞")}
        </button>
    )
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
    const setTheme = useSetTheme();

    useEffect(() => {
        const root = window.document.documentElement;

        if (window.localStorage.getItem("theme")) {
            root.setAttribute("data-theme", window.localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"));
            setTheme(window.localStorage.getItem("theme") as Theme);
        } else {
            const initialColorValue = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
            root.setAttribute("data-theme", initialColorValue);
            setTheme(initialColorValue as Theme);
            window.localStorage.setItem("theme", initialColorValue);
        }
    }, [setTheme]);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e);document.documentElement.setAttribute("data-bs-theme",e)}();`,
                }}
            />
            {children}
        </>
    );
};
