from rest_framework import serializers
from .models import IPO

class IPOSerializer(serializers.ModelSerializer):
    issue_size = serializers.SerializerMethodField()

    class Meta:
        model = IPO
        fields = '__all__'

    def get_issue_size(self, obj):
        return f"₹{obj.issue_size} Crore"
