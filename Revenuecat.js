/*
 * Script Mở Khóa Toàn Diện RevenueCat (Locket Gold, VSCO, CapCut, B612, Remini,...)
 * Hỗ trợ lưu trữ vĩnh viễn đến năm 2099 chống mất Gold
 */

const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

const locketGoldEntitlement = {
    "expires_date": "2099-12-31T23:59:59Z",
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "purchase_date": "2023-01-01T00:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store",
    "is_sandbox": false,
    "will_renew": true,
    "product_identifier": "Gold",
    "period_type": "annual"
};

const locketGoldSub = {
    "expires_date": "2099-12-31T23:59:59Z",
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "purchase_date": "2023-01-01T00:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store",
    "is_sandbox": false,
    "will_renew": true,
    "period_type": "annual"
};

if (obj && obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    
    // Khóa Locket Gold
    obj.subscriber.entitlements["Gold"] = locketGoldEntitlement;
    obj.subscriber.entitlements["pro"] = locketGoldEntitlement;
    obj.subscriber.entitlements["premium"] = locketGoldEntitlement;
    
    // Gán các id gói phổ biến của Locket và các app RevenueCat
    obj.subscriber.subscriptions["com.locket.gold.yearly"] = locketGoldSub;
    obj.subscriber.subscriptions["com.locket.gold.lifetime"] = locketGoldSub;
    obj.subscriber.subscriptions["Gold"] = locketGoldSub;
    obj.subscriber.subscriptions["pro"] = locketGoldSub;
    
    resp.body = JSON.stringify(obj);
} else {
    // Trường hợp app gửi gói rỗng hoặc lỗi kết nối
    resp.body = JSON.stringify({
        "request_date": new Date().toISOString(),
        "request_date_ms": Date.now(),
        "subscriber": {
            "entitlements": {
                "Gold": locketGoldEntitlement,
                "pro": locketGoldEntitlement,
                "premium": locketGoldEntitlement
            },
            "first_seen": "2023-01-01T00:00:00Z",
            "last_seen": new Date().toISOString(),
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "hoang3te",
            "original_application_version": "1.0",
            "original_purchase_date": "2023-01-01T00:00:00Z",
            "other_purchases": {},
            "subscriptions": {
                "com.locket.gold.yearly": locketGoldSub,
                "Gold": locketGoldSub
            }
        }
    });
}

$done(resp);
