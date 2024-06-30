import golden from '../../public/beer/golden.png'
import ipa from '../../public/beer/ipa.png'
import stout from '../../public/beer/stout.png'
import apa from '../../public/beer/apa.png'
import weiss from '../../public/beer/weiss.png'
import honey from '../../public/beer/honey.png'
import belgian from '../../public/beer/belgian.png'

export const productos = [
    {
        id: 1,
        nombre: 'Zarpada Golden',
        precio: 3500,
        categoria:'rubia',
        stock: 8,
        descripcion: 'Una cerveza dorada orientada a hacia el sabor, de intensidad promedio a moderadamente fuerte. Su tomabilidad es una cualidad refrescante son componentes críticos del estilo.',
        'img': golden,
    },
    {
        id: 2,
        nombre: 'Furiosa Ipa',
        precio: 3800,
        categoria:'paleale',
        stock: 13,
        descripcion: 'Una ale británica pálida, lupulada, moderadamente fuerte, muy bien atenuada, con un final seco, y un aroma y sabor lupulado.',
        'img': ipa,
    },
    {
        id: 3,
        nombre: 'Tormenta Stout',
        precio: 3600,
        categoria:'negra',
        stock: 6,
        descripcion: 'Una cerveza negra con un sabor tostado pronunciado, a menudo similar al café. Cremosas debido al nitro, el sabor tostado puede ser seco y como a café, a un tanto achocolatado.',
        'img': stout,
    },
    {
        id: 4,
        nombre: 'Salvaje APA',
        precio: 3400,
        categoria:'paleale',
        stock: 9,
        descripcion: 'Una ale pálida, refrescante y lupulada, con suficiente soporte de malta para hacer una cerveza balanceada y bebible.',
        'img': apa,
    },
    {
        id: 5,
        nombre: 'Rebelde Weis',
        precio: 3400,
        categoria:'paleale',
        stock: 4,
        descripcion: 'Una cerveza de trigo alemana pálida y refrescante, con alta carbonatación, final seco, sensación en boca cremosa, con notas a banana y clavo de olor producto de la levadura.',
        'img': weiss,
    },
    {
        id: 6,
        nombre: 'Mortal Honey',
        precio: 3300,
        categoria:'rubia',
        stock: 7,
        descripcion: 'Cerveza de cuerpo medio a pleno, de color dorado y con excepcionales aromas y sabores a la miel de abeja.',
        'img': honey,
    },
    {
        id: 7,
        nombre: 'Sagrada Belgian',
        precio: 3200,
        categoria:'negra',
        stock: 4,
        descripcion: '',
        'img': belgian,
    },
    {
        id: 8,
        nombre: 'Winter Bock',
        precio: 3100,
        categoria:'negra',
        stock: 8,
        descripcion: '',
        'img': belgian,
    },
    {
        id: 9,
        nombre: 'Velvet Kolsch',
        precio: 3300,
        categoria:'rubia',
        stock: 9,
        descripcion: '',
        'img': belgian,
    },
    ];

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve (productos)
            }, 800)
        })
    }   

    export const getProductsByCategory = (categoria) => {
        return new Promise ((resolve) => {
            const productosFiltrados = productos.filter((prod)=> prod.categoria === categoria)
            setTimeout(() => {
                resolve(productosFiltrados)
            }, 600)
        })
    }

    export const getProductById = (id) => {

        return new Promise((resolve) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
        setTimeout(() => {
            resolve(productoFiltrado)
        }, 1200)
    })
    }