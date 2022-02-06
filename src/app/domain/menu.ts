import { NavItem } from "./nav-item";

export let menu: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'dashboard'
    },
    {
        displayName: 'Java',
        iconName: '',
        route: 'java'
    },
    {
        displayName: 'Spring',
        iconName: '',
        route: 'spring',
        children: [
            {
                displayName: 'Spring',
                iconName: '',
                route: 'spring/spring-link'
            }, {
                displayName: 'Spring Boot',
                iconName: '',
                route: 'spring/spring-boot'
            },
            {
                displayName: 'Spring Batch',
                iconName: '',
                route: 'spring/spring-batch'
            }
        ]
    },
    {
        displayName: 'Jenkins  DevOps CI/CD',
        iconName: '',
        route: 'jenkins'
    },

    {
        displayName: 'Elastic Search',
        iconName: '',
        route: 'elasticsearch'
    },
    {
        displayName: 'Angular',
        iconName: '',
        route: 'angular',
        children: [
            {
                displayName: 'Angular',
                iconName: '',
                route: 'angular/angular-link'
            }, {
                displayName: 'Reactive form',
                iconName: '',
                route: 'angular/rib-sepa'
            }
        ]
    },
    {
        displayName: 'HTML & CSS',
        iconName: '',
        route: 'templates-html-css',
        children: [
            {
                displayName: 'Business Website',
                iconName: '',
                route: 'templates-html-css/business-website'
            },
            {
                displayName: 'Ecommerce website',
                iconName: '',
                route: 'templates-html-css/ecommerce-website'
            },

            {
                displayName: 'Drop down menu',
                iconName: '',
                route: 'templates-html-css/drop-down-menu'
            },

            {
                displayName: 'Fitness website',
                iconName: '',
                route: 'templates-html-css/fitness-website'
            },

            {
                displayName: 'Login & Registration',
                iconName: '',
                route: 'templates-html-css/login-registration'
            },
            {
                displayName: 'Template website',
                iconName: '',
                route: 'templates-html-css/template-website-one'
            },
            {
                displayName: 'Flex Box',
                iconName: '',
                route: 'templates-html-css/flex-box'
            },
            {
                displayName: 'Sélecteurs CSS',
                iconName: '',
                route: 'templates-html-css/selecteurs-css'
            }
        ]
    },
    {
        displayName: 'Maven',
        iconName: '',
        route: 'maven'
    },
    {
        displayName: 'SQL',
        iconName: '',
        route: 'bases-donnees'
    },
    {
        displayName: 'Docker',
        iconName: '',
        route: 'docker'
    }, {
        displayName: 'Linux',
        iconName: '',
        route: 'linux'
    },
    {
        displayName: 'NoSQL & Big Data',
        iconName: '',
        route: 'nosql'
    },
    {
        displayName: 'GIT',
        iconName: '',
        route: 'git'
    }
];