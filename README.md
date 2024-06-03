
# Issue Tracker

## Architectural decision

- Used nx as monorepository to create reusable libs and keep the projects separated
- All columns and application depends only on the Status enum. You can add new columns just by adding new options there.
- Shared elements (Card) are reusable and composable in order to increase resuability
- Reusable components and elements use custom properties in order to be easily customized
- Used MSWJS for mocks, using service workers in order to attack a fictional domain (example.com)
- Created my own drag library 

## Start the application

Run `npx nx serve issue-tracker` to start the development server. Happy coding!

## Build for production

Run `npx nx build issue-tracker` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).
