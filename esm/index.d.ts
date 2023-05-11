import React from "react";
import "./styles.css";
export interface Breadcrumb {
    breadcrumb: string;
    href: string;
}
export interface CharacterMap {
    from: string;
    to: string;
}
export interface BreadcrumbsProps {
    useDefaultStyle?: boolean;
    rootLabel?: string | null;
    omitRootLabel?: boolean;
    labelsToUppercase?: boolean | undefined;
    replaceCharacterList?: Array<CharacterMap> | undefined;
    transformLabel?: ((title: string) => React.ReactNode) | undefined;
    omitIndexList?: Array<number> | undefined;
    containerStyle?: any | null;
    containerClassName?: string;
    listStyle?: any | null;
    listClassName?: string;
    inactiveItemStyle?: any | null;
    inactiveItemClassName?: string;
    activeItemStyle?: any | null;
    activeItemClassName?: string;
}
declare const Breadcrumbs: ({ useDefaultStyle, rootLabel, omitRootLabel, labelsToUppercase, replaceCharacterList, transformLabel, omitIndexList, containerStyle, containerClassName, listStyle, listClassName, inactiveItemStyle, inactiveItemClassName, activeItemStyle, activeItemClassName, }: BreadcrumbsProps) => React.JSX.Element | null;
export default Breadcrumbs;
