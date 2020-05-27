declare module "design-react-kit"{
    export {default as Accordion} from "src/components/Accordion/Accordion"
    export {default as AccordionBody} from "src/components/Accordion/AccordionBody"
    export {default as AccordionHeader} from "src/components/Accordion/AccordionHeader"
    export {default as Autocomplete} from "src/components/Autocomplete/Autocomplete"
    export {default as AvatarContainer} from "src/components/Avatar/AvatarContainer"
    export {default as AvatarExtraText} from "src/components/Avatar/AvatarExtraText"
    export {default as AvatarGroupContainer} from "src/components/Avatar/AvatarGroupContainer"
    export {default as AvatarIcon} from "src/components/Avatar/AvatarIcon"
    export {default as AvatarPresence} from "src/components/Avatar/AvatarPresence"
    export {default as AvatarStatus} from "src/components/Avatar/AvatarStatus"
    export {default as AvatarWrapper} from "src/components/Avatar/AvatarWrapper"
    export {default as Badge} from "src/components/Badge/Badge"
    export {default as BottomNav} from "src/components/BottomNav/BottomNav"
    export {default as BottomNavItem} from "src/components/BottomNav/BottomNavItem"
    export {default as Button} from "src/components/Button/Button"
    export {default as Callout} from "src/components/Callout/Callout"
    export {default as CalloutText} from "src/components/Callout/CalloutText"
    export {default as CalloutTitle} from "src/components/Callout/CalloutTitle"
    export {default as Card} from "src/components/Card/Card"
    export {default as CardCategory} from "src/components/Card/CardCategory"
    export {default as CardFooterCTA} from "src/components/Card/CardFooterCTA"
    export {default as CardReadMore} from "src/components/Card/CardReadMore"
    export {default as CardSignature} from "src/components/Card/CardSignature"
    export {default as CardTag} from "src/components/Card/CardTag"
    export {default as CardTagsHeader} from "src/components/Card/CardTagsHeader"
    export {default as Chip} from "src/components/Chips/Chip"
    export {default as ChipLabel} from "src/components/Chips/ChipLabel"
    export {default as Collapse} from "src/components/Collapse/Collapse"
    export {default as CookieBar} from "src/components/CookieBar/CookieBar"
    export {default as CookieBarButton} from "src/components/CookieBar/CookieBarButton"
    export {default as CookieBarButtons} from "src/components/CookieBar/CookieBarButtons"
    export {default as Dimmer} from "src/components/Dimmer/Dimmer"
    export {default as DimmerButtons} from "src/components/Dimmer/DimmerButtons"
    export {default as FontLoader} from "src/components/FontLoader/FontLoader"
    export {default as FormGroup} from "src/components/FormGroup/FormGroup"
    export {default as Forward} from "src/components/Forward/Forward"
    export {default as Header} from "src/components/Header/Header"
    export {default as HeaderBrand} from "src/components/Header/HeaderBrand"
    export {default as HeaderContent} from "src/components/Header/HeaderContent"
    export {default as HeaderContext} from "src/components/Header/HeaderContext"
    export {default as HeaderLinkZone} from "src/components/Header/HeaderLinkZone"
    export {default as HeaderRightZone} from "src/components/Header/HeaderRightZone"
    export {default as Headers} from "src/components/Header/Headers"
    export {default as HeaderSearch} from "src/components/Header/HeaderSearch"
    export {default as HeaderSocialsZone} from "src/components/Header/HeaderSocialsZone"
    export {default as HeaderToggler} from "src/components/Header/HeaderToggler"
    export {default as Hero} from "src/components/Hero/Hero"
    export {default as Icon} from "src/components/Icon/Icon"
    export {default as Input} from "src/components/Input/Input"
    export {default as InputContainer} from "src/components/Input/InputContainer"
    export {default as utils} from "src/components/Input/utils"
    export {default as LinkList} from "src/components/LinkList/LinkList"
    export {default as LinkListItem} from "src/components/LinkList/LinkListItem"
    export {default as Nav} from "src/components/Nav/Nav"
    export {default as Notification} from "src/components/Notification/Notification"
    export {default as Offcanvas} from "src/components/Offcanvas/Offcanvas"
    export {default as Pager} from "src/components/Pager/Pager"
    export {default as PagerList} from "src/components/PagerList/PagerList"
    export {default as PasswordInput} from "src/components/PasswordInput/PasswordInput"
    export {default as PasswordMeter} from "src/components/PasswordMeter/PasswordMeter"
    export {default as Progress} from "src/components/Progress/Progress"
    export {default as Rating} from "src/components/Rating/Rating"
    export {default as Section} from "src/components/Section/Section"
    export {default as Separator} from "src/components/Separator/Separator"
    export {default as Sidebar} from "src/components/Sidebar/Sidebar"
    export {default as Skiplink} from "src/components/Skiplink/Skiplink"
    export {default as SkiplinkItem} from "src/components/Skiplink/SkiplinkItem"
    export {default as Spinner} from "src/components/Spinner/Spinner"
    export {default as StepperContainer} from "src/components/Stepper/StepperContainer"
    export {default as StepperContent} from "src/components/Stepper/StepperContent"
    export {default as StepperDots} from "src/components/Stepper/StepperDots"
    export {default as StepperHeader} from "src/components/Stepper/StepperHeader"
    export {default as StepperHeaderElement} from "src/components/Stepper/StepperHeaderElement"
    export {default as StepperNav} from "src/components/Stepper/StepperNav"
    export {default as Table} from "src/components/Table/Table"
    export {default as TimelinePin} from "src/components/Timeline/TimelinePin"
    export {default as TimelineWrapper} from "src/components/Timeline/TimelineWrapper"
    export {default as Toggle} from "src/components/Toggle/Toggle"
    export {default as utils} from "src/components/utils"
}
declare module 'src/components/Accordion/Accordion' {
    import * as React from 'react';

    export type AccordionTag = ((...args: any[])=>any) | string;

    export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AccordionTag;
        className?: string;
    }

    const Accordion: React.FC<AccordionProps>;

    export default Accordion;

}

declare module 'src/components/Accordion/AccordionBody' {
    import * as React from 'react';

    export type AccordionBodyChildren = React.ReactNode[] | React.ReactNode;

    export type AccordionBodyTag = ((...args: any[])=>any) | string;

    export interface AccordionBodyProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: AccordionBodyChildren;
        tag?: AccordionBodyTag;
        className?: string;
        active?: boolean;
        onToggle?: (...args: any[])=>any;
    }

    export default class AccordionBody extends React.Component<AccordionBodyProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Accordion/AccordionHeader' {
    import * as React from 'react';

    export type AccordionHeaderTag = ((...args: any[])=>any) | string;

    export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AccordionHeaderTag;
        className?: string;
        active?: boolean;
        onToggle?: (...args: any[])=>any;
    }

    const AccordionHeader: React.FC<AccordionHeaderProps>;

    export default AccordionHeader;

}

declare module 'src/components/Autocomplete/Autocomplete' {
    import * as React from 'react';

}

declare module 'src/components/Avatar/AvatarContainer' {
    import * as React from 'react';

    export type AvatarContainerTag = ((...args: any[])=>any) | string;

    export interface AvatarContainerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarContainerTag;
        className?: string;
    }

    const AvatarContainer: React.FC<AvatarContainerProps>;

    export default AvatarContainer;

}

declare module 'src/components/Avatar/AvatarExtraText' {
    import * as React from 'react';

    export type AvatarExtraTextTag = ((...args: any[])=>any) | string;

    export interface AvatarExtraTextProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarExtraTextTag;
        className?: string;
    }

    const AvatarExtraText: React.FC<AvatarExtraTextProps>;

    export default AvatarExtraText;

}

declare module 'src/components/Avatar/AvatarGroupContainer' {
    import * as React from 'react';

    export type AvatarGroupContainerTag = ((...args: any[])=>any) | string;

    export interface AvatarGroupContainerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarGroupContainerTag;
        className?: string;
        wrapperClassName?: string;
    }

    const AvatarGroupContainer: React.FC<AvatarGroupContainerProps>;

    export default AvatarGroupContainer;

}

declare module 'src/components/Avatar/AvatarIcon' {
    import * as React from 'react';

    export type AvatarIconTag = ((...args: any[])=>any) | string;

    export type AvatarIconHref = ((...args: any[])=>any) | string;

    export interface AvatarIconProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarIconTag;
        className?: string;
        href?: AvatarIconHref;
        color?: string;
        size?: string;
    }

    const AvatarIcon: React.FC<AvatarIconProps>;

    export default AvatarIcon;

}

declare module 'src/components/Avatar/AvatarPresence' {
    import * as React from 'react';

    export type AvatarPresenceTag = ((...args: any[])=>any) | string;

    export interface AvatarPresenceProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarPresenceTag;
        className?: string;
        presence?: string;
    }

    const AvatarPresence: React.FC<AvatarPresenceProps>;

    export default AvatarPresence;

}

declare module 'src/components/Avatar/AvatarStatus' {
    import * as React from 'react';

    export type AvatarStatusTag = ((...args: any[])=>any) | string;

    export interface AvatarStatusProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarStatusTag;
        className?: string;
        status?: string;
    }

    const AvatarStatus: React.FC<AvatarStatusProps>;

    export default AvatarStatus;

}

declare module 'src/components/Avatar/AvatarWrapper' {
    import * as React from 'react';

    export type AvatarWrapperTag = ((...args: any[])=>any) | string;

    export interface AvatarWrapperProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: AvatarWrapperTag;
        className?: string;
        extra?: string;
    }

    const AvatarWrapper: React.FC<AvatarWrapperProps>;

    export default AvatarWrapper;

}

declare module 'src/components/Badge/Badge' {
    import * as React from 'react';

    export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        color?: string;
        pill?: boolean;
        tag?: string;
        children?: React.ReactNode;
        cssModule?: Object;
        className?: string;
    }

    const Badge: React.FC<BadgeProps>;

    export default Badge;

}

declare module 'src/components/BottomNav/BottomNav' {
    import * as React from 'react';

    export type BottomNavTag = ((...args: any[])=>any) | string;

    export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: BottomNavTag;
        className?: string;
    }

    const BottomNav: React.FC<BottomNavProps>;

    export default BottomNav;

}

declare module 'src/components/BottomNav/BottomNavItem' {
    import * as React from 'react';

    export type BottomNavItemTag = ((...args: any[])=>any) | string;

    export interface BottomNavItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: BottomNavItemTag;
        className?: string;
        active?: boolean;
        link?: string;
        label?: string;
        iconName?: string;
        srText?: string;
        alert?: boolean;
        badge?: boolean;
    }

    const BottomNavItem: React.FC<BottomNavItemProps>;

    export default BottomNavItem;

}

declare module 'src/components/Button/Button' {
    import * as React from 'react';

    export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        icon?: boolean;
    }

    const Button: React.FC<ButtonProps>;

    export default Button;

}

declare module 'src/components/Callout/Callout' {
    import * as React from 'react';

    export type CalloutTag = ((...args: any[])=>any) | string;

    export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        className?: string;
        color?: string;
        highlight?: boolean;
        tag?: CalloutTag;
    }

    const Callout: React.FC<CalloutProps>;

    export default Callout;

}

declare module 'src/components/Callout/CalloutText' {
    import * as React from 'react';

    export type CalloutTextTag = ((...args: any[])=>any) | string;

    export interface CalloutTextProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        bigText?: boolean;
        className?: string;
        children?: React.ReactNode;
        tag?: CalloutTextTag;
    }

    const CalloutText: React.FC<CalloutTextProps>;

    export default CalloutText;

}

declare module 'src/components/Callout/CalloutTitle' {
    import * as React from 'react';

    export type CalloutTitleTag = ((...args: any[])=>any) | string;

    export interface CalloutTitleProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        className?: string;
        tag?: CalloutTitleTag;
    }

    const CalloutTitle: React.FC<CalloutTitleProps>;

    export default CalloutTitle;

}

declare module 'src/components/Card/Card' {
    import * as React from 'react';

    export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        teaser?: boolean;
        spacing?: boolean;
        noWrapper?: boolean;
        wrapperClassName?: string;
    }

    const Card: React.FC<CardProps>;

    export default Card;

}

declare module 'src/components/Card/CardCategory' {
    import * as React from 'react';

    export interface CardCategoryProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        iconName?: string;
        date?: string;
        href?: string;
    }

    const CardCategory: React.FC<CardCategoryProps>;

    export default CardCategory;

}

declare module 'src/components/Card/CardFooterCTA' {
    import * as React from 'react';

    export interface CardFooterCTAProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
    }

    const CardFooterCTA: React.FC<CardFooterCTAProps>;

    export default CardFooterCTA;

}

declare module 'src/components/Card/CardReadMore' {
    import * as React from 'react';

    export type CardReadMoreTag = ((...args: any[])=>any) | string | {
        $$typeof?: Symbol;
        render?: (...args: any[])=>any;
    } | (((...args: any[])=>any) | string | {
        $$typeof?: Symbol;
        render?: (...args: any[])=>any;
    })[];

    export interface CardReadMoreProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
        iconName?: string;
        href?: string;
        text?: string;
        tag?: CardReadMoreTag;
    }

    const CardReadMore: React.FC<CardReadMoreProps>;

    export default CardReadMore;

}

declare module 'src/components/Card/CardSignature' {
    import * as React from 'react';

    export interface CardSignatureProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
    }

    const CardSignature: React.FC<CardSignatureProps>;

    export default CardSignature;

}

declare module 'src/components/Card/CardTag' {
    import * as React from 'react';

    export interface CardTagProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: string;
        className?: string;
    }

    const CardTag: React.FC<CardTagProps>;

    export default CardTag;

}

declare module 'src/components/Card/CardTagsHeader' {
    import * as React from 'react';

    export interface CardTagsHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        date?: string;
    }

    const CardTagsHeader: React.FC<CardTagsHeaderProps>;

    export default CardTagsHeader;

}

declare module 'src/components/Chips/Chip' {
    import * as React from 'react';

    export type ChipTag = ((...args: any[])=>any) | string;

    export interface ChipProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: ChipTag;
        /**
         * Classi aggiuntive da usare per il componente Chip
         */
        className?: string;
        /**
         * Impostarlo su `true` per centrare la label all'interno
         */
        simple?: boolean;
        /**
         * Impostarlo su `true` per una versione più grande del componente Chip.
         */
        large?: boolean;
        /**
         * Impostarlo su `true` per renderizzare il componente Chip come disabilitato
         */
        disabled?: boolean;
        color?: string;
    }

    const Chip: React.FC<ChipProps>;

    export default Chip;

}

declare module 'src/components/Chips/ChipLabel' {
    import * as React from 'react';

    export type ChipLabelTag = ((...args: any[])=>any) | string;

    export interface ChipLabelProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: ChipLabelTag;
        /**
         * Classi aggiuntive da usare per il componente ChipLabel
         */
        className?: string;
    }

    const ChipLabel: React.FC<ChipLabelProps>;

    export default ChipLabel;

}

declare module 'src/components/Collapse/Collapse' {
    import * as React from 'react';

    export interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        header?: boolean;
        /**
         * Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true
         */
        inOpen?: boolean;
        /**
         * Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true
         */
        onOverlayClick?: (...args: any[])=>any;
    }

    const Collapse: React.FC<CollapseProps>;

    export default Collapse;

}

declare module 'src/components/CookieBar/CookieBar' {
    import * as React from 'react';

    export type CookieBarTag = ((...args: any[])=>any) | string;

    export interface CookieBarProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: CookieBarTag;
        className?: string;
    }

    const CookieBar: React.FC<CookieBarProps>;

    export default CookieBar;

}

declare module 'src/components/CookieBar/CookieBarButton' {
    import * as React from 'react';

    export type CookieBarButtonTag = ((...args: any[])=>any) | string;

    export interface CookieBarButtonProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: CookieBarButtonTag;
        className?: string;
    }

    export default class CookieBarButton extends React.Component<CookieBarButtonProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/CookieBar/CookieBarButtons' {
    import * as React from 'react';

    export type CookieBarButtonsTag = ((...args: any[])=>any) | string;

    export interface CookieBarButtonsProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: CookieBarButtonsTag;
        className?: string;
    }

    const CookieBarButtons: React.FC<CookieBarButtonsProps>;

    export default CookieBarButtons;

}

declare module 'src/components/Dimmer/Dimmer' {
    import * as React from 'react';

    export interface DimmerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        icon?: string;
        color?: string;
        className?: string;
    }

    const Dimmer: React.FC<DimmerProps>;

    export default Dimmer;

}

declare module 'src/components/Dimmer/DimmerButtons' {
    import * as React from 'react';

    export interface DimmerButtonsProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        color?: string;
        dark?: string;
        single?: string;
        className?: string;
    }

    const DimmerButtons: React.FC<DimmerButtonsProps>;

    export default DimmerButtons;

}

declare module 'src/components/FontLoader/FontLoader' {
    import * as React from 'react';

}

declare module 'src/components/FormGroup/FormGroup' {
    import * as React from 'react';

    export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    }

    export default class FormGroup extends React.Component<FormGroupProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Forward/Forward' {
    import * as React from 'react';

    export interface ForwardScrollToRef {
        current?: Element;
    }

    export interface ForwardProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
        scrollToRef?: ForwardScrollToRef;
    }

    const Forward: React.FC<ForwardProps>;

    export default Forward;

}

declare module 'src/components/Header/Header' {
    import * as React from 'react';

    export type HeaderType = "slim" | "center" | "navbar";

    export type HeaderTheme = "" | "light" | "dark";

    export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente Header
         */
        className?: string;
        type: HeaderType;
        /**
         * Riduce la grandezza del componente Header. Funziona solamente con Header "center".
         */
        small?: boolean;
        /**
         * Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
         * il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
         * in mobile, mentre "dark" in versione desktop.
         */
        theme?: HeaderTheme;
    }

    const Header: React.FC<HeaderProps>;

    export default Header;

}

declare module 'src/components/Header/HeaderBrand' {
    import * as React from 'react';

    export type HeaderBrandTag = ((...args: any[])=>any) | string;

    export type HeaderBrandChildren = React.ReactNode[] | React.ReactNode;

    export interface HeaderBrandProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: HeaderBrandTag;
        /**
         * Classi aggiuntive da usare per il componente HeaderBrand
         */
        className?: string;
        /**
         * Da usare per la sovrascrittura di classi predefinite
         */
        cssModule?: Object;
        /**
         * Da usare con il componente Header Nav in versione "responsive"
         */
        responsive?: boolean;
        /**
         * Da utilizzare per specificare URL risorsa esterna.
         */
        href?: string;
        /**
         * Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.
         */
        iconName?: string;
        /**
         * Elementi React da renderizzare al proprio interno.
         */
        children?: HeaderBrandChildren;
    }

    export default class HeaderBrand extends React.PureComponent<HeaderBrandProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Header/HeaderContent' {
    import * as React from 'react';

    export type HeaderContentExpand = boolean | string;

    export interface HeaderContentProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente HeaderContent
         */
        className?: string;
        /**
         * Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu
         */
        megamenu?: boolean;
        /**
         * Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl"
         */
        expand?: HeaderContentExpand;
    }

    export default class HeaderContent extends React.PureComponent<HeaderContentProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Header/HeaderContext' {
    import * as React from 'react';

}

declare module 'src/components/Header/HeaderLinkZone' {
    import * as React from 'react';

    export interface HeaderLinkZoneProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato
         */
        className?: string;
    }

    const HeaderLinkZone: React.FC<HeaderLinkZoneProps>;

    export default HeaderLinkZone;

}

declare module 'src/components/Header/HeaderRightZone' {
    import * as React from 'react';

    export interface HeaderRightZoneProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente HeaderRightZone
         */
        className?: string;
    }

    export default class HeaderRightZone extends React.PureComponent<HeaderRightZoneProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Header/Headers' {
    import * as React from 'react';

    export interface HeadersProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto
         */
        shadow?: boolean;
        /**
         * Aggiunge il comportamento "sticky" ai componenti Header contenuti
         */
        sticky?: boolean;
        /**
         * Classi addizionali per il componente Headers
         */
        className?: string;
    }

    const Headers: React.FC<HeadersProps>;

    export default Headers;

}

declare module 'src/components/Header/HeaderSearch' {
    import * as React from 'react';

    export interface HeaderSearchProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente HeaderSearch
         */
        className?: string;
        /**
         * Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo
         */
        label?: string;
        /**
         * Nome dell'icona da utilizzare
         */
        iconName?: string;
        /**
         * Indirizzo di indirizzamento al click dell'icona
         */
        href?: string;
    }

    const HeaderSearch: React.FC<HeaderSearchProps>;

    export default HeaderSearch;

}

declare module 'src/components/Header/HeaderSocialsZone' {
    import * as React from 'react';

    export type HeaderSocialsZoneChildren = React.ReactNode[] | React.ReactNode;

    export interface HeaderSocialsZoneProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno.
         */
        className?: string;
        /**
         * Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta
         */
        label?: string;
        /**
         * Utilizzato per elencare i social da mostrare
         */
        children?: HeaderSocialsZoneChildren;
    }

    const HeaderSocialsZone: React.FC<HeaderSocialsZoneProps>;

    export default HeaderSocialsZone;

}

declare module 'src/components/Header/HeaderToggler' {
    import * as React from 'react';

    export interface HeaderTogglerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
         * Se fornito questo sovrascriverà il valore di default.
         */
        tag?: string;
        /**
         * Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
         * Se fornito questo sovrascriverà il valore di default.
         */
        type?: string;
        /**
         * Classi addizionali per il componente HeaderToggler
         */
        className?: string;
    }

    export default class HeaderToggler extends React.PureComponent<HeaderTogglerProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Hero/Hero' {
    import * as React from 'react';

    const Hero: React.FC;

    export default Hero;

}

declare module 'src/components/Icon/Icon' {
    import * as React from 'react';

    export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
        color?: string;
        size?: string;
        icon?: string;
        padding?: boolean;
    }

    const Icon: React.FC<IconProps>;

    export default Icon;

}

declare module 'src/components/Input/Input' {
    import * as React from 'react';

    export type InputTag = ((...args: any[])=>any) | string;

    export type InputInnerRef = Object | ((...args: any[])=>any) | string;

    export interface InputProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        type?: string;
        size?: string;
        label?: string;
        placeholder?: string;
        value?: string;
        id?: string;
        infoText?: string;
        normalized?: boolean;
        bsSize?: string;
        state?: any;
        valid?: boolean;
        invalid?: boolean;
        tag?: InputTag;
        innerRef?: InputInnerRef;
        static?: any;
        plaintext?: boolean;
        addon?: boolean;
        className?: string;
        cssModule?: Object;
    }

    export default class Input extends React.Component<InputProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Input/InputContainer' {
    import * as React from 'react';

    export interface InputContainerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        value?: string;
        id?: string;
        label?: string;
        infoText?: string;
        wrapperClass?: string;
        activeClass?: string;
        infoTextClass?: string;
        children?: React.ReactNode;
    }

    const InputContainer: React.FC<InputContainerProps>;

    export default InputContainer;

}

declare module 'src/components/Input/utils' {
    import * as React from 'react';

}

declare module 'src/components/LinkList/LinkList' {
    import * as React from 'react';

    export type LinkListTag = ((...args: any[])=>any) | string;

    export interface LinkListProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: LinkListTag;
        /**
         * Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo
         */
        header?: React.ReactNode;
        /**
         * Classi aggiuntive da usare per il componente lista del LinkList
         */
        className?: string;
        /**
         * Classi aggiuntive da usare per il componente wrapper del LinkList
         */
        wrapperClassName?: string;
        /**
         * Quando è abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi.
         */
        multiline?: boolean;
        sublist?: boolean;
        avatar?: boolean;
    }

    const LinkList: React.FC<LinkListProps>;

    export default LinkList;

}

declare module 'src/components/LinkList/LinkListItem' {
    import * as React from 'react';

    export type LinkListItemTag = ((...args: any[])=>any) | string;

    export interface LinkListItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Indica se l'elemento è attivo o no
         */
        active?: boolean;
        /**
         * Indica se l'elemento è disabilitato o no
         */
        disabled?: boolean;
        /**
         * Indica se l'elemento è un titolo.
         */
        header?: boolean;
        /**
         * Indica se l'elemento è un divisore
         */
        divider?: boolean;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: LinkListItemTag;
        /**
         * Classi aggiuntive da usare per il componente LinkListItem
         */
        className?: any;
        /**
         * Indica il link a cui l'elemento deve puntare.
         */
        href?: string;
        /**
         * Indica la taglia/grandezza dell'elemento
         */
        size?: string;
    }

    const LinkListItem: React.FC<LinkListItemProps>;

    export default LinkListItem;

}

declare module 'src/components/Nav/Nav' {
    import * as React from 'react';

    export type NavVertical = boolean | string;

    export type NavTag = ((...args: any[])=>any) | string;

    export interface NavProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * Renderizza i componenti NavItem al suo interno come tab.
         */
        tabs?: boolean;
        /**
         * Renderizza i componenti NavItem al suo interno come pills.
         */
        pills?: boolean;
        /**
         * Renderizza i componenti NavItem al suo interno come tab.
         */
        card?: boolean;
        /**
         * Se abilitato tutti i NavItem all'interno avranno la stessa larghezza
         */
        justified?: boolean;
        /**
         * Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile
         */
        fill?: boolean;
        /**
         * Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"`
         */
        vertical?: NavVertical;
        /**
         * Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra.
         */
        horizontal?: string;
        /**
         * Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader.
         */
        navbar?: boolean;
        /**
         * Utilizzarlo in caso di utilizzo di componenti personalizzati
         */
        tag?: NavTag;
    }

    const Nav: React.FC<NavProps>;

    export default Nav;

}

declare module 'src/components/Notification/Notification' {
    import * as React from 'react';

    export interface NotificationProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        header?: string;
        children?: React.ReactElement<any>;
        state?: string;
        dismissable?: boolean;
        fix?: string;
        withIcon?: boolean;
        style?: Object;
    }

    const Notification: React.FC<NotificationProps>;

    export default Notification;

}

declare module 'src/components/Offcanvas/Offcanvas' {
    import * as React from 'react';

    export type OffcanvasChildren = React.ReactNode[] | React.ReactNode;

    export type OffcanvasTag = ((...args: any[])=>any) | string;

    export interface OffcanvasProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: OffcanvasChildren;
        tag?: OffcanvasTag;
        className?: string;
        onClose?: (...args: any[])=>any;
        isOpen?: boolean;
    }

    export default class Offcanvas extends React.Component<OffcanvasProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Pager/Pager' {
    import * as React from 'react';

    export type PagerTag = ((...args: any[])=>any) | string;

    export interface PagerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        className?: string;
        tag?: PagerTag;
        "aria-label"?: string;
    }

    const Pager: React.FC<PagerProps>;

    export default Pager;

}

declare module 'src/components/PagerList/PagerList' {
    import * as React from 'react';

    export type PagerListTag = ((...args: any[])=>any) | string;

    export interface PagerListProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
        size?: string;
        tag?: PagerListTag;
    }

    const PagerList: React.FC<PagerListProps>;

    export default PagerList;

}

declare module 'src/components/PasswordInput/PasswordInput' {
    import * as React from 'react';

    export interface PasswordInputProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    }

    export default class PasswordInput extends React.Component<PasswordInputProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/PasswordMeter/PasswordMeter' {
    import * as React from 'react';

    export interface PasswordMeterSteps {
        score?: number;
        label?: string;
        className?: string;
    }

    export interface PasswordMeterProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        score?: number;
        steps?: PasswordMeterSteps[];
    }

    export default class PasswordMeter extends React.Component<PasswordMeterProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Progress/Progress' {
    import * as React from 'react';

    export type ProgressTag = ((...args: any[])=>any) | string;

    export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: ProgressTag;
        className?: string;
        value?: number;
        label?: string;
        indeterminate?: boolean;
        color?: string;
    }

    export default class Progress extends React.Component<ProgressProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Rating/Rating' {
    import * as React from 'react';

    export type RatingLegend = any | any | any;

    export interface RatingProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        /**
         * La lista di id per ciascun elemento intero del Rating. La lista deve essere ordinata dal rating 1 al rating 5.
         */
        inputs: string[];
        /**
         * Il campo "label" è impostato di default su "Valuta ${n} stelle su 5", ma può essere personalizzato con questa funzione che riceve il numero input come argomento `function (n: number) => string`.
         */
        labelTemplate?: (...args: any[])=>any;
        /**
         * Da utilizzare in caso legenda principale del Rating. Passare una componente React da mostrare come legenda (all'interno del tag `<legend>`). It is possible also to show the legend of screen readers only
         */
        legend?: RatingLegend;
        /**
         * Mostra la leggenda solo ai dispositivi screen reader
         */
        name?: string;
        /**
         * Classi aggiuntive da usare per il componente wrapper del Rating
         */
        wrapperClassName?: string;
        /**
         * Classi aggiuntive da usare per ciascun elemento all'interno del componente Rating
         */
        className?: string;
        /**
         * Callback chiamata ad ogni cambio di valore di rating. Il nuovo valore ed il name verranno passati: `function (n, name) => void`
         */
        onChangeRating?: (...args: any[])=>any;
        /**
         * Rende il componente read-only
         */
        readOnly?: boolean;
        /**
         * Il valore corrente del componente
         */
        value?: number;
    }

    const Rating: React.FC<RatingProps>;

    export default Rating;

}

declare module 'src/components/Section/Section' {
    import * as React from 'react';

    export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        muted?: string;
        color?: string;
        neutral?: string;
        image?: string;
        className?: string;
    }

    const Section: React.FC<SectionProps>;

    export default Section;

}

declare module 'src/components/Separator/Separator' {
    import * as React from 'react';

    export interface SeparatorClassNames {
        top?: string;
        bottom?: string;
    }

    export interface SeparatorProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        colorTop?: string;
        colorBottom?: string;
        classNames?: SeparatorClassNames;
    }

    const Separator: React.FC<SeparatorProps>;

    export default Separator;

}

declare module 'src/components/Sidebar/Sidebar' {
    import * as React from 'react';

    export type SidebarTag = ((...args: any[])=>any) | string;

    export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: SidebarTag;
        className?: string;
        secondary?: boolean;
        left?: boolean;
        right?: boolean;
        dark?: boolean;
    }

    const Sidebar: React.FC<SidebarProps>;

    export default Sidebar;

}

declare module 'src/components/Skiplink/Skiplink' {
    import * as React from 'react';

    export type SkiplinkTag = ((...args: any[])=>any) | string;

    export interface SkiplinkProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: SkiplinkTag;
        className?: string;
    }

    const Skiplink: React.FC<SkiplinkProps>;

    export default Skiplink;

}

declare module 'src/components/Skiplink/SkiplinkItem' {
    import * as React from 'react';

    export type SkiplinkItemTag = ((...args: any[])=>any) | string;

    export interface SkiplinkItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: SkiplinkItemTag;
        className?: string;
    }

    const SkiplinkItem: React.FC<SkiplinkItemProps>;

    export default SkiplinkItem;

}

declare module 'src/components/Spinner/Spinner' {
    import * as React from 'react';

    export type SpinnerTag = ((...args: any[])=>any) | string;

    export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: SpinnerTag;
        className?: string;
        active?: boolean;
        small?: boolean;
        double?: boolean;
    }

    export default class Spinner extends React.Component<SpinnerProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Stepper/StepperContainer' {
    import * as React from 'react';

    export type StepperContainerTag = ((...args: any[])=>any) | string;

    export interface StepperContainerProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperContainerTag;
        className?: string;
        children?: React.ReactElement<any>;
        dark?: string;
        mobile?: boolean;
    }

    const StepperContainer: React.FC<StepperContainerProps>;

    export default StepperContainer;

}

declare module 'src/components/Stepper/StepperContent' {
    import * as React from 'react';

    export type StepperContentTag = ((...args: any[])=>any) | string;

    export interface StepperContentProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperContentTag;
        className?: string;
        children?: React.ReactElement<any>;
        dark?: boolean;
    }

    const StepperContent: React.FC<StepperContentProps>;

    export default StepperContent;

}

declare module 'src/components/Stepper/StepperDots' {
    import * as React from 'react';

    export type StepperDotsTag = ((...args: any[])=>any) | string;

    export interface StepperDotsProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperDotsTag;
        classNames?: string;
        children?: React.ReactElement<any>;
    }

    const StepperDots: React.FC<StepperDotsProps>;

    export default StepperDots;

}

declare module 'src/components/Stepper/StepperHeader' {
    import * as React from 'react';

    export type StepperHeaderTag = ((...args: any[])=>any) | string;

    export interface StepperHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperHeaderTag;
        classNames?: string;
        children?: React.ReactElement<any>;
    }

    const StepperHeader: React.FC<StepperHeaderProps>;

    export default StepperHeader;

}

declare module 'src/components/Stepper/StepperHeaderElement' {
    import * as React from 'react';

    export type StepperHeaderElementTag = ((...args: any[])=>any) | string;

    export interface StepperHeaderElementProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperHeaderElementTag;
        className?: string;
        variant?: string;
        children?: React.ReactElement<any>;
        icon?: string;
        iconName?: string;
        stepperNumber?: React.ReactElement<any>;
        noLine?: boolean;
    }

    const StepperHeaderElement: React.FC<StepperHeaderElementProps>;

    export default StepperHeaderElement;

}

declare module 'src/components/Stepper/StepperNav' {
    import * as React from 'react';

    export type StepperNavTag = ((...args: any[])=>any) | string;

    export interface StepperNavProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        tag?: StepperNavTag;
        classNames?: string;
        children?: React.ReactElement<any>;
    }

    const StepperNav: React.FC<StepperNavProps>;

    export default StepperNav;

}

declare module 'src/components/Table/Table' {
    import * as React from 'react';

    export interface TableProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        children?: React.ReactNode;
        className?: string;
        bordered?: boolean;
        compact?: boolean;
        striped?: boolean;
        hoverable?: boolean;
        responsive?: boolean;
    }

    export default class Table extends React.Component<TableProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/Timeline/TimelinePin' {
    import * as React from 'react';

    export interface TimelinePinProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
        icon?: string;
        label?: string;
        now?: boolean;
        nowText?: string;
        past?: boolean;
    }

    const TimelinePin: React.FC<TimelinePinProps>;

    export default TimelinePin;

}

declare module 'src/components/Timeline/TimelineWrapper' {
    import * as React from 'react';

    export interface TimelineProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        className?: string;
    }

    const Timeline: React.FC<TimelineProps>;

    export default Timeline;

}

declare module 'src/components/Toggle/Toggle' {
    import * as React from 'react';

    export type ToggleLabel = string | React.ReactElement<any>;

    export interface ToggleProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
        label?: ToggleLabel;
    }

    export default class Toggle extends React.Component<ToggleProps, any> {
        render(): JSX.Element;

    }

}

declare module 'src/components/utils' {
    import * as React from 'react';

}

