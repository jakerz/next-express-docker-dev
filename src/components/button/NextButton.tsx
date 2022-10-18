interface Props {
    children: React.ReactNode
}

export default function NextButton({ children }: Props) {
    return (
        <>
            <div>
                <button type="button">{children.name}</button>
            </div>
        </>
    )
}
