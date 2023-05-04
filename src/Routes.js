import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import FeedScreen from './Screens/Feed/FeedScreen'

export const router = createBrowserRouter(
    [
{path : "/",
element :     <FeedScreen/>
},

// {path : "",
// element : },

// {path : "",
// element : },

    ]
);