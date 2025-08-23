IMAGE_NAME := gluon
PORT := 5100

.PHONY: build-img run-prod clean stop

build-img:
	@echo "Fazendo build da imagem: $(IMAGE_NAME)"
	docker build -t $(IMAGE_NAME) .
	@echo "Deu bom demais o build da imagem $(IMAGE_NAME)!!"

run-prod: stop build-img
	@echo "Iniciando container na porta $(PORT)..."
	docker run -d -p $(PORT):$(PORT) --name $(IMAGE_NAME) $(IMAGE_NAME)
	@echo "Container $(IMAGE_NAME) rodando na porta $(PORT)"

stop:
	@echo "Parando e removendo container $(IMAGE_NAME)..."
	docker stop $(IMAGE_NAME) 2>/dev/null && echo "✅ Container $(IMAGE_NAME) parado" || echo "⚠️  Container $(IMAGE_NAME) não estava rodando"
	docker rm $(IMAGE_NAME) 2>/dev/null && echo "✅ Container $(IMAGE_NAME) removido" || echo "⚠️  Container $(IMAGE_NAME) não existia"

clean: stop
	@echo "Removendo imagem $(IMAGE_NAME)..."
	docker image rm $(IMAGE_NAME) 2>/dev/null && echo "✅ Imagem $(IMAGE_NAME) removida" || echo "⚠️  Imagem $(IMAGE_NAME) não existia"
	@echo "Limpeza concluída!"

restart: stop run-prod
	@echo "Reinicialização completa concluída!"