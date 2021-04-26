import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ResourceList = ({ resourceName }) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resourceName) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resourceName)
    }, [resourceName]);


    return (
        <ul>
            {resources.map(resource => (
                <li key={resource.id}>{resource.title}</li>
            ))}
        </ul>
    )
}

export default ResourceList;