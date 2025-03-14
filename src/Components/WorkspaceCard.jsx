import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';


export default function WorkspaceCard({ workspace }) {
    return (
        <Link to="/workspacepage" className={` border border-gray-300 rounded-lg text-white h-full`}>
            <div className={`rounded-t-lg flex flex-row items-center justify-center bg-primary`}>
                <h2 className='font-semibold text-center text-white p-7 text-txt20'>{workspace.title}</h2>
            
                </div>

                <div className="flex flex-col justify-between gap-4 p-5 bg-white rounded-b-lg">
                    <p className="font-normal text-txt14 line-clamp-2 text-primary">{workspace.description}</p>
                    
                    <div className="flex justify-end">
                        <p className="px-2 text-gray-500 text-txt12 opacity-80"><FontAwesomeIcon icon={faCalendar} /> {workspace.created_at}</p>
                    </div>
            </div>
        </Link>
        
    );
}
