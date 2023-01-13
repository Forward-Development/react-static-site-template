# Forward monitoring app

Monitoring Website for Forward Protocal

## Requirement 

- **Docker + Docker Compose** (required)
- **pnpm** (optional) pnpm is default package manager but still can use others by editing script in Dockerfile and dev.Dockerfile

---

## Start development

to install project

```
git clone https://github.com/Forward-Development/forward-monitor-app
cd forward-monitor-app
```

### Environment file

Create .env file reference from .env.example

```
VITE_USE_MOCK_DATA= // true | false recommend set true only in development
VITE_GLOBAL_FETCH_INTERVAL= // number in milliseconds unit
VITE_API_URL= // string !required exclude trailing slash 
VITE_ENABLE_PREFETCH= // true | false prefetch data onload
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

# For other details and documentation
https://forwardian.atlassian.net/wiki/spaces/FDEFI/pages/61309093/FE+Monitoring+Website