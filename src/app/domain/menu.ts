import { NavItem } from "./nav-item";

export let menu: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'dashboard'
    },
    {
        displayName: 'Angular',
        iconName: '',
        route: 'angular',
        children: [
            {
                displayName: 'Reactive form',
                iconName: '',
                route: 'angular/rib-sepa'
            }
        ]
    },
    {
        displayName: 'Pages web',
        iconName: '',
        route: 'pages-web',
        children: [
            {
                displayName: 'Business Website',
                iconName: '',
                route: 'pages-web/business-website'
            },
            {
                displayName: 'Ecommerce website',
                iconName: '',
                route: 'pages-web/ecommerce-website'
            },

            {
                displayName: 'Drop down menu',
                iconName: '',
                route: 'pages-web/drop-down-menu'
            },

            {
                displayName: 'Fitness website',
                iconName: '',
                route: 'pages-web/fitness-website'
            },

            {
                displayName: 'Login & Registration',
                iconName: '',
                route: 'pages-web/login-registration'
            },
            {
                displayName: 'Template website',
                iconName: '',
                route: 'pages-web/template-website-one'
            },
            {
                displayName: 'Flex Box',
                iconName: '',
                route: 'pages-web/flex-box'
            },
            {
                displayName: 'Sélecteurs CSS',
                iconName: '',
                route: 'pages-web/selecteurs-css'
            }
        ]
    }
];