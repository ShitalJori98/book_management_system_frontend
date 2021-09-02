import React from 'react'
import { Link } from 'react-router-dom'

export default function Menues() {
    return (
        <div>
            <div class="list-group">
                <Link to="/" class="list-group-item list-group-item-action"> Home</Link>
                <Link to="/add-books" class="list-group-item list-group-item-action">Add Books</Link>
                <Link to="/view-books" class="list-group-item list-group-item-action">View Books</Link>
                <Link to="#" class="list-group-item list-group-item-action">About</Link>
                <Link to="#" class="list-group-item list-group-item-action">Contact</Link>
            </div>
        </div>
    )
}
