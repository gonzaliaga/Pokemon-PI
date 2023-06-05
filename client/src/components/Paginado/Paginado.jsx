import React from 'react'
import style from './Paginado.module.css'

export default function Paginado({ pokemonsPerPage, allPokemons, paginado, page }) {
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    const goToNextPage = () => {
        if (page < pageNumbers.length) {
            paginado(page + 1)
        }
    }

    const goToPreviousPage = () => {
        if (page > 1) {
            paginado(page - 1)
        }
    }

    return (
        <nav>
            <ul className={style.pagination}>
                <li style={{ listStyle: 'none' }}>
                    <button className={style.buttons} onClick={goToPreviousPage}>&#9664;</button>
                </li>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <li key={number} style={{ listStyle: 'none' }}>
                            <button
                                className={style.buttons}
                                style={page === number ? { color: "red", textShadow: "0px 6px 6px rgba(254, 26, 6, 1)", fontWeight: "bold" } : {}}
                                onClick={() => paginado(number)}
                            >
                                {number}
                            </button>
                        </li>
                    ))
                }
                <li style={{ listStyle: 'none' }}>
                    <button className={style.buttons} onClick={goToNextPage}>&#9654;</button>
                </li>
            </ul>
        </nav>
    )
}
