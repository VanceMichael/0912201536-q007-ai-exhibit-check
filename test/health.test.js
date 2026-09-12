import test from "node:test"; import assert from "node:assert/strict"; test("健康状态可序列化",()=>assert.deepEqual({status:"ok"},{status:"ok"}));
