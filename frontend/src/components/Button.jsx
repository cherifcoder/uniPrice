const Button=({
    children,
    type="button",
    variant="btn",
    size="h-12",
    icon:Icon,
     iconColor = "",
    ...props
})=>{

    return(
        <button 
        type={type}
        className={`gap-2 btn h-13 text-xl ${variant} ${size}  flex justify-center items-cente`}
        >
            {Icon && <Icon className={iconColor} />} {children}
        </button>
    )
}

export default Button