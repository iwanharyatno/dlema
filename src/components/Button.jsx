function Button(props) {
    return <button type={props.type ?? 'button'} onClick={props.onClick} className={'m-2 px-4 py-1 bg-blue-700 text-white shadow-md hover:bg-blue-900 active:shadow-lg ' + props.className}>{props.text}</button>;
}

export default Button;
