run:
	cd backend && \
	python manage.py migrate && \
	python manage.py runserver

buildjs:
	cd frontend && \
	bun run build

# run dev server first
generate_openapi:
	cd frontend && \
	bun run openapi-ts
