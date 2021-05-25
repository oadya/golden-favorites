import { NavItem } from "./nav-item";

export let menu: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'dashboard'
    },
    {
        displayName: 'Angular',
        iconName: 'face',
        route: 'angular',
        children: [
            {
                displayName: 'Reactive form',
                iconName: 'account_box',
                route: 'angular/rib-sepa'
            }
        ]
    },
    {
        displayName: 'Pages web',
        iconName: 'face',
        route: 'pages-web',
        children: [
            {
                displayName: 'Business Website',
                iconName: 'account_box',
                route: 'pages-web/business-website'
            },
            {
                displayName: 'Ecommerce website',
                iconName: 'account_box',
                route: 'pages-web/ecommerce-website'
            },

            {
                displayName: 'Drop down menu',
                iconName: 'account_box',
                route: 'pages-web/drop-down-menu'
            },

            {
                displayName: 'Fitness website',
                iconName: 'account_box',
                route: 'pages-web/fitness-website'
            },

            {
                displayName: 'Login & Registration',
                iconName: 'account_box',
                route: 'pages-web/login-registration'
            },
            {
                displayName: 'Template website',
                iconName: 'account_box',
                route: 'pages-web/template-website-one'
            },
            {
                displayName: 'Flex Box',
                iconName: 'account_box',
                route: 'pages-web/flex-box'
            },
            {
                displayName: 'Sélecteurs CSS',
                iconName: 'account_box',
                route: 'pages-web/selecteurs-css'
            }
        ]
    }
];