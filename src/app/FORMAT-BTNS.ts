import { FormatBtn } from './format-btn';

export const FORMAT_BTNS: FormatBtn[] = [
    {
        name: '<h1>',
        value: '# ',
        wrap: false,
        faClass: ''
    },
    {
        name: '<h2>',
        value: '## ',
        wrap: false,
        faClass: ''
    },
    {
        name: '<h3>',
        value: '### ',
        wrap: false,
        faClass: ''
    },
    {
        name: '<h4>',
        value: '#### ',
        wrap: false,
        faClass: ''
    },
    {
        name: '<h5>',
        value: '##### ',
        wrap: false,
        faClass: ''
    },
    {
        name: '<h6>',
        value: '###### ',
        wrap: false,
        faClass: ''
    },
    {
        name: 'bold',
        value: '**',
        wrap: true,
        faClass: 'fa fa-bold'
    },
    {
        name: 'italic',
        value: '_',
        wrap: true,
        faClass: 'fa fa-italic'
    },
    {
        name: 'strikethrough',
        value: '~~',
        wrap: true,
        faClass: 'fa fa-strikethrough'
    },
    {
        name: 'bullet',
        value: '* ',
        wrap: false,
        faClass: 'fa fa-list-ul'
    },
    {
        name: 'number',
        value: '1. ',
        wrap: false,
        faClass: 'fa fa-list-ol'
    },
    {
        name: 'code',
        value: '```',
        wrap: true,
        faClass: 'fa fa-code'
    },
    {
        name: 'quote',
        value: '> ',
        wrap: false,
        faClass: 'fa fa-quote-right'
    },
    {
        name: '<hr>',
        value: '---',
        wrap: false,
        faClass: ''
    }
]