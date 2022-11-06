export const TabItem = ({ title, idx, active, setActive }) => {
    const className = active ? 'border-b-yellow-400' : 'border-none text-slate-400';

    return (
        <div className="nav-item px-2">
            <button onClick={() => setActive(title)} className="pt-7 pb-3">
                <span className={`hover:text-yellow transition-colors transition ease-in duration-300 border-b-2 ${className}`}>
                    { title.toUpperCase() }
                </span>
            </button>
        </div>
    )
}