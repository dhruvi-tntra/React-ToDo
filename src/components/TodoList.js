import React from 'react'

function TodoList({list, remove}) {
	return (
		<>
			{list?.length > 0 ? (
				<ul className='todo-list'>
					{list.map((entry, index) => (
						<div className='todo'>
							<li key={index}> {entry} </li>

							<button 
								className='delete-button'
								onClick={() => {
									remove(entry);
								}}
							>
								Delete
							</button>

							<button 
								className='completed-button'
								onClick={() => {
									remove(entry);
								}}
							>
								Completed
							</button>
						</div>
					)
				)}
				</ul>
			) : (
				<div className='empty'>
					<p>
						No task found!!!
					</p>
				</div>
			)}
		</>
	);
}

export default TodoList;