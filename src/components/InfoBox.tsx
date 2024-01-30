
import { type ReactNode } from "react"

type InfoBoxProps = {
    mode: "hint" | 'warning',
    children: ReactNode,
    severity?: "low" | "medium" | "high"
}

const InfoBox = ({ mode, children, severity }: InfoBoxProps) => {
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox


