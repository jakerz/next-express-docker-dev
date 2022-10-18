interface INextBtn {
    btnName: string,
    btnValue?: number,
}

export default function NextButton(props : INextBtn) {
    return (
        <>
            <div>
                <button type="button">{props.btnName}</button>
            </div>
        </>
    )
}
