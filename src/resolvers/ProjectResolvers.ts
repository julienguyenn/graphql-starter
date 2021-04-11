// src/resolvers/ProjectResolver.ts

import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { projects, tasks, ProjectData } from "../data";
import Project from "../schemas/Project";

@Resolver(of => Project)
export default class {
    // Takes two arguments, the return type and an object container other options
    // In this case, we say it returns a Project and can return null
    @Query(returns => Project, { nullable: true })
    // Takes one argument (name of project) that we can get with the @arg decorator
    // Finds the project with the name
    projectByName(@Arg("name") name: string): ProjectData | undefined {
    return projects.find(project => project.name === name);
    }

    // Resolves the task field
    @FieldResolver()
    // Gets object that contains the result returned from the root or parent field
    tasks(@Root() projectData: ProjectData) {
    return tasks.filter(task => {
        return task.project_id === projectData.id;
    });
    }
}