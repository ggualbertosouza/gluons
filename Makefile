IMAGE_NAME := gluon
PORT := 5100

.PHONY: build-img run-prod clean stop

build-img:
	docker build -t $(IMAGE_NAME) .

run-prod: stop build-img
	docker run -d -p $(PORT):$(PORT) --name $(IMAGE_NAME) $(IMAGE_NAME)

stop:
	docker stop $(IMAGE_NAME) || true
	docker rm $(IMAGE_NAME) || true

clean: stop
	docker image rm $(IMAGE_NAME) || true