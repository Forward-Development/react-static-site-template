# Forward monitoring app

Monitoring Website for Forward Protocal

## Requirement 

- **Docker + Docker Compose** (required)
- **pnpm** (optional) pnpm is default package manager but still can use others by editing script in Dockerfile and dev.Dockerfile

---

## Start development

to install project

```
git clone https://github.com/Forward-Development/react-static-site-template my-app
cd my-app
```

### Environment file

Create .env file reference from .env.example

```
VITE_API_URL= // string !required exclude trailing slash 
```

to watch change and continually rebuild module 

```
docker compose up
```

to build web site in production environment

```
docker compose -f docker-compose.prod.yaml
```

### Testing
for unit testing
```
pnpm test
```
coverage testing 
```
pnpm coverage
```

### For JS/TS autocomplete

You need to install node_modules on your local machine by run package manager install command

```
pnpm i
```

then restart your code editor/IDE or restart language server service