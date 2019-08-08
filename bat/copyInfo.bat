@echo off
FOR /R C:\Users\Sunny\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\ContentManagementSDK\Creatives\279978 %%I IN (*) DO (
	IF %%~zI GTR 6144 (
		copy %%~fI H:\spotlight\Info\*
	) ELSE (
		copy %%~fI H:\spotlight\InfoBak\*
	)
)