import {IMenu} from "@app-core/interfaces/navigation.interface";

export const NAVIGATION_MOCK: IMenu[] = [
    {
        title: 'Departments',
        icon: 'patient_list',
        path: '',
        submenu: [
            {
                title: 'Users',
                path: 'users',
                visible: true
            },
        ]
    },
    {
        title: 'Color resources',
        icon: 'style',
        color: 'accent', 
        path: '',
        submenu: [
            {
                title: 'List',
                path: 'color-resources',
                visible: true
            }
        ]
    },
    {
        title: 'Bus Testing',
        icon: 'play_shapes',
        path: '',
        submenu: [
            {
                title: 'Dispatch command',
                path: '',
                visible: true
            },
            {
                title: 'Check alive',
                path: '',
                visible: true
            }
        ]
    }
];
