run:
	cd backend && \
	python manage.py migrate && \
	python manage.py runserver

watch:
	cd frontend && \
	bun run dev

build:
	cd frontend && \
	bun run openapi-ts && \
	bun run build
