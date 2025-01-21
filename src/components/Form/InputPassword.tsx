import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "../../styles/login.css";

interface InpPassProps {
    id: string,
    placeholder: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputPassword(props: InpPassProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const handlePassword = () => setShowPassword(!showPassword)

    return (
        <>
            <label htmlFor="password" className="area">
                <input type={showPassword ? "text" : "password"} placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                />
                <button onClick={handlePassword} type="button">
                    {showPassword && <EyeOff size={25}/>}
                    {!showPassword && <Eye size={25}/>}
                </button>
            </label>
        </>
    )
}

