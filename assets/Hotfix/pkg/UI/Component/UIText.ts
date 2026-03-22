import {UIBaseComponent} from "db://assets/Hotfix/pkg/UI/Base/UIBaseComponent";
import {IHolder} from "db://assets/Hotfix/pkg/Common/IHolder";

export class UIText extends UIBaseComponent{
    constructor(holder:IHolder, var_arg:string) {
        super(holder,var_arg)
    }
}