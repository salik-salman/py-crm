from rest_framework import routers, urlpatterns
from .api import AttendanceViewSet

router = routers.DefaultRouter()
router.register('api/attendance', AttendanceViewSet, 'attendance')

urlpatterns = router.urls
