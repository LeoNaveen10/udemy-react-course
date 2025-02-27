import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
	/**
	 * null - showing the table
	 * undefined - do nothing
	 */
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddTask(task) {
		setProjectState((prevState) => {
			const newTask = {
				text: task,
				projectId: prevState.selectedProjectId,
				id: Math.random(),
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectState((prevState)=>{
			return {
				...prevState,
				tasks : prevState.tasks.filter(task => task.id !==id)
			}
		})
	}

	function handleSelectProject(id) {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	function handleStartAddProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleDeleteProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	function handleCancleAddProjectr() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleAddProject(projectData) {
		const newProject = {
			...projectData,
			id: Math.random(),
		};

		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}
	const selectedProject = projectState.projects.find(
		(project) => project.id === projectState.selectedProjectId
	);

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectState.tasks}
		/>
	);

	if (projectState.selectedProjectId === null) {
		content = (
			<NewProject
				handleAddProject={handleAddProject}
				handleCancel={handleCancleAddProjectr}
			/>
		);
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onSelectProject={handleSelectProject}
			/>
			{content}
		</main>
	);
}

export default App;
