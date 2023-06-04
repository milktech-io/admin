import { Dashboard } from '../pages/Dashboard';
import { Infinities } from '../pages/Products/Multipliers/Infinities';
import { InfinityEdit } from '../pages/Products/Multipliers/Infinities/Edit';
import { InfinityCreate } from '../pages/Products/Multipliers/Infinities/Create';
import { Plans } from '../pages/Products/Multipliers/Plans';
import { PlansEdit } from '../pages/Products/Multipliers/Plans/Edit';
import { PlansCreate } from '../pages/Products/Multipliers/Plans/Create';
import { Variants } from '../pages/Products/Statics/Variants';
import { VariantsEdit } from '../pages/Products/Statics/Variants/Edit';
import { VariantsCreate } from '../pages/Products/Statics/Variants/Create';

import { Purchases } from '../pages/Purchases';
import { PurchaseRegister } from '../pages/Purchases/Register';
import { PurchasesShow } from '../pages/Purchases/Show';
import { ProductIndex, ProductRoutes }  from '../pages/Products';
import { ProductShow }  from '../pages/Products/show';
import { ProductEdit }  from '../pages/Products/edit';
import { UserIndex, UserRoutes } from '../pages/Users/index';
import { UserShowIndex, UserShowRoutes } from '../pages/Users/Show';
import { Edit } from '../pages/Users/Edit';
import { Profile } from '../pages/Users/Profile';
import { Tecuan } from '../pages/Tecuan';
import { Categories } from '../pages/Categories';
import { CategoriesEdit } from '../pages/Categories/Edit';
import { RangesRoutes, RangesIndex } from '../pages/Range';
import { Documents } from '../pages/Document';
import { Tickets } from '../pages/Ticket'; 
import { Roles } from '../pages/Roles'; 
import { SummariesIndex, SummariesRoutes } from '../pages/Summaries'; 
import { TransactionIndex, TransactionRoutes } from '../pages/transaction'; 
import { WithdrawIndex, WithdrawRoutes } from '../pages/Withdraw'; 
import { CommunityIndex, CommunityRoutes } from '../pages/Community'; 
import { Translation } from '../pages/Translation'; 
import { TranslationEdit } from '../pages/Translation/Edit'; 
import { Newland } from '../pages/Newland'; 
import { NewlandEdit } from '../pages/Newland/Edit'; 
import { NewlandShow } from '../pages/Newland/Show'; 
import { NewlandDetail } from '../pages/Newland/Detail'; 
import { NewlandFinancialDetail } from '../pages/Newland/FinancialDetail'; 

import { Chaincrop } from '../pages/Chaincrop'; 
import { ChaincropEdit } from '../pages/Chaincrop/Edit'; 
import { ChaincropDetail } from '../pages/Chaincrop/Detail'; 
import { ChaincropFinancialDetail } from '../pages/Chaincrop/FinancialDetail'; 


import { Tree } from '../pages/Tree'; 


export const admin=[
     {path:'/inicio', roles:[], Component:Dashboard},


     {path:'multiplicadores/:id/planes',  roles:[], Component:Plans},
     {path:'planes/:id/editar',  roles:[], Component:PlansEdit},
     {path:'planes/crear',  roles:[], Component:PlansCreate},

     {path:'estaticos/:id/variantes',  roles:[], Component:Variants},
     {path:'variantes/:id/editar',  roles:[], Component:VariantsEdit},
     {path:'variantes/:id/crear',  roles:[], Component:VariantsCreate},

     {path:'multiplicadores/:id/infinity',  roles:[], Component:Infinities},
     {path:'infinity/:id/editar',  roles:[], Component:InfinityEdit},
     {path:'infinity/crear',  roles:[], Component:InfinityCreate},



     {path:'/usuarios',  roles:[], Component:UserIndex, Children:UserRoutes},
     {path:'/usuarios/:id',  roles:[], Component:UserShowIndex, Children:UserShowRoutes},
     {path:'/usuarios/:id/editar',  roles:[], Component:Edit},
     {path:'/usuarios/perfil',   roles:[], Component:Profile},

     {path:'/rangos',  roles:[], Component:RangesIndex, Children:RangesRoutes},
     {path:'/roles',  roles:[], Component:Roles},

     {path:'/ventas',  roles:[], Component:Purchases},
     {path:'/ventas/nueva',  roles:[], Component:PurchaseRegister},
     {path:'/ventas/:id',  roles:[], Component:PurchasesShow},

     {path:'/documentos',  roles:[], Component:Documents},

     {path:'productos', Component:ProductIndex, Children:ProductRoutes},
     {path:'productos/:id',  roles:['administracion','soporte'], Component:ProductShow},
     {path:'productos/:id/editar',  roles:['administracion','soporte'], Component:ProductEdit},

     {path:'/categorias',  roles:['administracion'], Component:Categories},
     {path:'/categorias/:id/editar',  roles:['administracion'], Component:CategoriesEdit},

     {path:'/tickets',  roles:['administracion'], Component:Tickets},

     {path:'/tecuan',  roles:['tecuan'], Component:Tecuan},


     {path:'/resumenes',  roles:[], Component:SummariesIndex, Children:SummariesRoutes},
     {path:'/traducciones',  roles:[], Component:Translation},
     {path:'/traducciones/:id/editar',  roles:['administracion','soporte'], Component:TranslationEdit},

     {path:'/transacciones',  roles:[], Component:TransactionIndex, Children:TransactionRoutes},
     {path:'/comunidad',  roles:[], Component:CommunityIndex, Children:CommunityRoutes},


     {path:'/retiros',  roles:[], Component:WithdrawIndex, Children:WithdrawRoutes},
     {path:'/arbol',  roles:[],  Component:Tree},

     {path:'/newland',  roles:[], Component:Newland},
     {path:'/newland/:id/editar',  roles:[], Component:NewlandEdit},
     {path:'/newland/:id',  roles:[], Component:NewlandShow},
     {path:'/newland/detalles',  roles:[], Component:NewlandDetail},
     {path:'/newland/:id/estado-financiero',  roles:[], Component:NewlandFinancialDetail},

     {path:'crop/:id',  roles:[], Component:Chaincrop},
     {path:'/crop/:id/editar',  roles:[], Component:ChaincropEdit},
     {path:'/crop/:id/detalles',  roles:[], Component:ChaincropDetail},
     {path:'/crop/:id/estado-financiero',  roles:[], Component:ChaincropFinancialDetail},


]
