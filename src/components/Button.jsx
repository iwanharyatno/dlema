function Button(props) {
    return <button type={props.type ?? 'button'} onClick={props.onClick} className={'m-2 px-4 py-2 text-white shadow-md active:shadow-lg ' + props.className + ' ' + (props.color ?? 'bg-blue-700 hover:bg-blue-900')}>{props.text}</button>;
}

export default Button;
