FROM python:3.10

WORKDIR /app

EXPOSE 5050


COPY Pipfile Pipfile.lock ./
COPY requirements.txt ./

RUN python -m pip install --upgrade pip
RUN pip install pipenv

# RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]