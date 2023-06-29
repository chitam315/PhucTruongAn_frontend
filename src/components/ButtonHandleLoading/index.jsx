import { ButtonStyled } from "./style"
import { Spin } from 'antd';
import classNames from "classnames";

const ButtonHandleLoading = ({ Loading, children, onClick, className, ...props }) => {
    return (
        <ButtonStyled {...props} disabled={Loading} onClick={onClick} className={classNames("btn block", className)}>
            {Loading && <Spin className="text-xl" />}
            {children}
        </ButtonStyled>
    )
}

export default ButtonHandleLoading