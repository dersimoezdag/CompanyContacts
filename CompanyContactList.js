const CompanyContactList = [
    {
        key: '1und1',
        name: '1&1 AG',
        street: 'Elgendorfer Str.',
        houseNumber: '57',
        postalCode: '56410',
        place: 'Montabaur',
        phoneNumber: undefined,
        mobileNumber: undefined,
        email: '1und1service@1und1.de'
    },
    {
        key: '1ntelecom',
        name: '1N Telecom GmbH',
        street: 'Prinzenallee',
        houseNumber: '7',
        postalCode: '40549',
        place: 'Düsseldorf',
        phoneNumber: undefined,
        mobileNumber: undefined,
        email: 'impressum@1n.de'
    },
    {
        key: 'db',
        name: 'DB Fernverkehr AG',
        street: 'Europa-Allee',
        houseNumber: '78 - 84',
        postalCode: '60486',
        place: 'Frankfurt',
        phoneNumber: undefined,
        mobileNumber: undefined,
        email: 'reiseportal@bahn.de'
    },
    {
        key: 'dkb',
        name: 'Deutsche Kreditbank AG',
        street: undefined,
        houseNumber: undefined,
        postalCode: '10919',
        place: 'Berlin',
        phoneNumber: undefined,
        mobileNumber: undefined,
        email: 'info@dkb.de'
    },
    {
        key: 'commerzbank',
        name: 'Commerzbank Aktiengesellschaft',
        street: 'Kaiserplatz',
        houseNumber: undefined,
        postalCode: '60311',
        place: 'Frankfurt am Main',
        phoneNumber: '+49 69 13620',
        mobileNumber: undefined,
        email: 'info@commerzbank.com'
    },
    {
        key: 'ryanair',
        name: 'Ryanair DAC.',
        street: 'Airside Business Park',
        houseNumber: undefined,
        postalCode: undefined,
        place: 'Swords Co. Dublin',
        phoneNumber: undefined,
        mobileNumber: undefined,
        email: 'impressum.de@ryanair.com'
    }
]

(function() {
    'use strict';
    if(!window) return;
    window.CompanyContactList = CompanyContactList;
})();
