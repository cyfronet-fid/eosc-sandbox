FROM python:3.10.11
WORKDIR /app
# Don't write pyc files to disk
ENV PYTHONDONTWRITEBYTECODE 1
# Don't buffer stdout and stderr
ENV PYTHONUNBUFFERED 1
COPY Pipfile Pipfile.lock /app/
COPY .env /app/.env
RUN pip install --upgrade pip pipenv
RUN pipenv install --deploy --system
COPY app app
EXPOSE 8088
CMD pipenv run uvicorn --host 0.0.0.0 --port 8088 app.main:app