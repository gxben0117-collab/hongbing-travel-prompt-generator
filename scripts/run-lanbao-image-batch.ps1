$ErrorActionPreference = "Stop"

$root = "C:\Users\User\Documents\Codex"
$outDir = Join-Path $root "藍寶輸出圖"
$manifestPath = Join-Path $outDir "lanbao_travel_batch_manifest.json"
$imageCli = "C:\Users\User\.codex\skills\.system\imagegen\scripts\image_gen.py"

if (-not $env:OPENAI_API_KEY) {
  throw "OPENAI_API_KEY is not set."
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$jobs = @($manifest.jobs)
$total = $jobs.Count
$done = 0
$skipped = 0
$failed = 0

foreach ($job in $jobs) {
  $target = [string]$job.output_image_target
  $source = [string]$job.source
  $promptFile = [string]$job.prompt_file

  if (Test-Path -LiteralPath $target) {
    $skipped += 1
    Write-Host "[$($job.index)/$total] skip existing $([IO.Path]::GetFileName($target))"
    continue
  }

  Write-Host "[$($job.index)/$total] generating $([IO.Path]::GetFileName($target))"
  try {
    python $imageCli edit `
      --image $source `
      --prompt-file $promptFile `
      --size 1056x1408 `
      --quality low `
      --out $target
    $done += 1
  } catch {
    $failed += 1
    Write-Warning "Failed job $($job.index): $($_.Exception.Message)"
  }
}

Write-Host "Lanbao batch finished. Generated=$done Skipped=$skipped Failed=$failed Total=$total"
if ($failed -gt 0) {
  exit 1
}
