from rest_framework import routers, urlpatterns
from .api import MenuViewSet

router = routers.DefaultRouter()
router.register('api/menu', MenuViewSet, 'menu')

urlpatterns = router.urls
