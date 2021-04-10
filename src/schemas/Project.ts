import { Field, Int, ObjectType } from "type-graphql";
import Task from "./Task";

@ObjectType() // defines Project as a GraphQL type
export default class Project {
    @Field(type => Int) // defines the fields (fields are optional)
    id: number;

    @Field()
    name: string;

    @Field(type => [Task])
    task: Task[];
}